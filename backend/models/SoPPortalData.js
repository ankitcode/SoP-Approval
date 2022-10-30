var mongoose = require("mongoose"),
  Schema = mongoose.Schema, 
  autoIncrement = require("mongoose-auto-increment");

const SoPPortalDataSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  location: {
    type: String,
    required: true,
  },
  region: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  maintenanceDate: {
    type: Date,
    required: true,
  },
  shutdown: {
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    reason: {
      type: String,
      required: true,
    },
  },
  shutdownType: {
    occ: {
      type: Boolean,
      default: false,
    },
    postOcc: {
      type: Boolean,
      default: false,
    },
    emergency: {
      type: Boolean,
      default: false,
    },
  },
  workDetails: {
    risks: {
      type: String,
      required: true,
    },
    mitigation: {
      type: String,
      required: true,
    },
  },
  shutdownElement: {
    type: String,
    required: true,
  },
  premises: {
    powergrid: {
      type: Boolean,
      default: false,
    },
    other: {
      type: Boolean,
      default: false,
    },
  },
  shutdownWorkScope: {
    powergrid: {
      type: Boolean,
      default: false,
    },
    other: {
      type: Boolean,
      default: false,
    },
  },
  shutdownRequisite: {
    ptw: {
      type: Boolean,
      default: false,
    },
    ppe: {
      type: Boolean,
      default: false,
    },
    pep: {
      type: Boolean,
      default: false,
    },
    presence: {
      type: Boolean,
      default: false,
    },
  },
  isolationSequence: {
    type: String,
    required: true,
  },
  esCloseOperationSequence: {
    type: String,
    required: true,
  },
  restorationSequence: {
    type: String,
    required: true,
  },
  esOpenOperationSequence: {
    type: String,
    required: true,
  },
  presenceOfEmp: {
    maintenanceHead: {
      type: Boolean,
      default: false,
    },
    stationInCharge: {
      type: Boolean,
      default: false,
    },
    alternate_1: {
      type: String,
    },
    alternate_2: {
      type: String,
    },
  },
  additionalSupervision: {
    type: String,
  },
  rtamcCheck: {
    type: String,
    required: true,
  },
  siteCheck: {
    type: String,
    required: true,
  },
  remarks: {
    type: String,
  },
  otherInfo: {
    type: String,
  },
  createdOn: {
    type: Date,
    default: Date.now,
  },
  sentDetails: [
    {
      remarks: {
        type: String,
      },
      sentBy: {
        type: mongoose.Schema.Types.ObjectId,
      },
      sentTo: {
        type: mongoose.Schema.Types.ObjectId,
      },
      sentOn: {
        type: Date,
      },
    },
  ],
  currentlyWith: {
    type: mongoose.Schema.Types.ObjectId,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

autoIncrement.initialize(mongoose.connection);
SoPPortalDataSchema.plugin(autoIncrement.plugin, { model: 'SoPPortalData', field: 'sopID', startAt: 1000, incrementBy: 100 });

const SoPPortalData = mongoose.model("SoPPortalData", SoPPortalDataSchema);
SoPPortalData.createIndexes();

module.exports = SoPPortalData;
