import checkHoliday from "../utils/calendarific.js";
import Resignation from "../models/resignation.models.js";
import ExitQuestionnaire from "../models/exitQuestionnaire.js";
import Notification from "../models/notification.models.js";

export const submitResignation = async (req, res) => {
  try {
    const { lwd } = req.body;
    const lastWorkingDay = new Date(lwd);

    const dayOfWeek = lastWorkingDay.getDay();
    if (dayOfWeek === 0 || dayOfWeek === 6) {
      return res.status(400).json({
        message: "Last working day cannot be on a weekend",
      });
    }

    const isHoliday = await checkHoliday(lastWorkingDay);
    if (isHoliday) {
      return res.status(400).json({
        message: "Last working day cannot be a holiday",
      });
    }

    console.log("User from request:", req.user);

    const employeeId = req.user.id;
    if (!employeeId) {
      return res.status(400).json({
        message: "Employee ID is required",
      });
    }

    const resignation = await Resignation.create({
      employeeId,
      lwd: lastWorkingDay,
    });

    res.status(201).json({
      data: {
        resignation: {
          _id: resignation._id,
        },
      },
    });
  } catch (error) {
    console.error("Error in submitResignation:", error);
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};


export const submitExitResponses = async (req, res) => {
  try {
    const { responses } = req.body;
    console.log('User from request:', req.user); 

    if (!req.user || !req.user.id) {
      return res.status(400).json({ message: 'User ID is missing' });
    }

    const exitQuestionnaire = await ExitQuestionnaire.create({
      employeeId: req.user.id,
      responses
    });

    res.json({ message: 'Exit questionnaire submitted successfully' });
  } catch (error) {
    console.error('Error saving exit questionnaire:', error);
    res.status(500).json({ message: error.message });
  }
};

export const getResignationStatus = async(req,res) =>{
  try {
    const resignation = await Resignation.findOne({ 
      employeeId: req.user.id 
    }).sort({ createdAt: -1 });

    res.json({ resignation });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export const getNotifications = async(req,res) =>{
  try {
    const notifications = await Notification.find({
      userId: req.user.id,
      read: false
    }).sort({ createdAt: -1 });

    res.json({ notifications });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

