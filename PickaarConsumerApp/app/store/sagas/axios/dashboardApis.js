import axios from 'axios';
import { REACT_APP_DEV_MODE } from "@env"
export const axiosDashboardRequest = async (requestData) => {
    try {
        const userObj = await require('../../../mockAPI/dashboardAPI.json');
        console.log(REACT_APP_DEV_MODE)
        const resp = await axios.post(REACT_APP_DEV_MODE + 'cust/user/testAPI',
            {
                firstName: 'Fred',
                lastName: 'Flintstone'
            }
        );
        console.log(resp)
        const result = JSON.parse(JSON.stringify(userObj));
        return result.dashboard;
    } catch (e) {
        return false
    }
};