'use strict';

const got = require('got');

module.exports = {

    getAllState : async ()=>{
        const response = await got.get(`${process.env.COWIN_BASE_URL}${process.env.COWIN_LIST_STATE}`);
        const states = JSON.parse(response.body);
        // console.log(JSON.stringify(states));
        return states;
    },

    getAllDistrictOfState : async (stateId)=>{
        const uri = process.env.COWIN_LIST_DISTRICT.replace('${stateId}', stateId);
        const response =await got.get(`${process.env.COWIN_BASE_URL}${uri}`);
        const district = JSON.parse(response.body);
        // console.log(JSON.stringify(district));
        return district;
    },

    getAppointmentCalendarByPin : async (pincode, date)=>{
        console.log(`Entering appointment by district with value ${pincode} and ${date}`);
        let apiURL = process.env.COWIN_CALENDAR_BY_PIN.replace('${pincode}', pincode).replace('${date}', date);
        let appointmentCalendarbyPin = [];
        try {
            const response =await got.get(`${process.env.COWIN_BASE_URL}${apiURL}`);
            appointmentCalendarbyPin = JSON.parse(response.body);
            // console.log(JSON.stringify(appointmentCalendarbyPin));
        } catch(error) {
            console.error(error);
        }
        return appointmentCalendarbyPin;
    },
    
    getAppointmentCalendarByDistrict : async (districtId, date)=>{
        console.log(`Entering appointment by district with value ${districtId} and ${date}`);
        let apiURL = process.env.COWIN_CALENDAR_BY_DISTRICT.replace('${districtId}', districtId).replace('${date}', date);
        let appointmentCalendarbyDistrict = [];
        try {
            const response = await got.get(`${process.env.COWIN_BASE_URL}${apiURL}`);
            appointmentCalendarbyDistrict = JSON.parse(response.body);
            // console.log(JSON.stringify(appointmentCalendarbyDistrict));
        } catch(error) {
            console.error(error);
        }
        return appointmentCalendarbyDistrict
    }

}