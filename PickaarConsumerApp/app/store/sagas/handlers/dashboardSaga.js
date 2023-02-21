import { axiosDashboardRequest } from "../axios/dashboardApis";
import { call, put } from "redux-saga/effects";
import { onSuccessDashboard, onFailureDashboard } from "../../reducers/dashboardReducer";



/**
 *
 * @description: On Dashboard screen load. 
 * @todo: Develop service to RETURN dashboard data based on device ID
 * @param {*} request 
            {
                type: CALL_SAGA.REQUEST_DASHBOARD_ON_LOAD,
                serviceId: 103,
                serviceName:'DashboardOnLoad',
                deviceId: '987-23423-234-234-234'
            }
 */
export function* getDashboardSAGA() {
    const _DashbordResponse = yield call(() => {
        return axiosDashboardRequest()
    })
    console.log(_DashbordResponse)
    if (!_DashbordResponse)
        yield put(onFailureDashboard(_DashbordResponse))
        


    yield put(onSuccessDashboard(_DashbordResponse))

}