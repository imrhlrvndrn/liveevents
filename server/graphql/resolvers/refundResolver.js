const Booking = require("../../models/Booking");
const Event = require("../../models/Event");
const Refund = require("../../models/Refund");
const User = require("../../models/User");
const { transformRefund } = require("../helpers/helper");

module.exports = {
    createRefund: async args => {
        const newRefund = new Refund({
            entity: "refund",
            itemType: args.refundInput.itemType || "",
            status: "initiated",
            reason: args.refundInput.reason,
            quantityRequested: args.refundInput.quantityRequested,
            amountToBeRefunded: args.refundInput.amountToBeRefunded
        });

        try {
            const returnedNewRefund = newRefund.save();

            return transformRefund(returnedNewRefund);
        } catch (error) {
            throw error;
        }
    }
};
