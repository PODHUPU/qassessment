import axios from 'axios'
import { expect } from 'chai'
import * as config from '../config/common'
import * as expected from '../config/testData.json'

describe('/GET Current Weather Data by Lat & Lon',  () => {
    let response
    before(async () => {
        const path = '/current?'
        const query = config.getLat() + config.getLon()
        const getRequest = {
            method: 'GET',
            url: config.requestUrl(path, query),
            header: config.requestHeader()
        }
        response = await axios(getRequest)
    })

    it('Should return successful response Object with status 200 - OK', async () => {
        expect(response)
            .to.be.an('object')
            .to.include({
                status: 200,
                statusText: 'OK'
            })
    })

    it('Should return all the data entries of state_code based on the Lat & Lon', async () => {
        const dataEntries = response.data.data;
        dataEntries.map(element => {
            console.log(`State code : ${element.state_code}` )
        });
    })

    it('Should return the correct state_code based on the Lat & Lon', () => {
        expect(response.data.data[0].state_code)
            .to.equal(expected.latlon.state_code)
    })
})