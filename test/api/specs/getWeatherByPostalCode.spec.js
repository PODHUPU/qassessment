import axios from 'axios'
import { expect } from 'chai'
import * as config from '../config/common'
import * as expected from '../config/testData.json'

describe('/GET Current Weather Data by Postal Code', async () => {
    let response
    before(async () => {
        const path = '/forecast/daily?'
        const query = config.getPostalCode()
        const getRequest = {
            method: 'GET',
            url: config.requestUrl(path, query),
            header: config.requestHeader()
        }
        response = await axios(getRequest)
    })

    it('Should return all the data entries of timestamp_utc and weather based on the postal code', async () => {
        
        expect(response)
            .to.be.an('object')
            .to.include({
                status: 200,
                statusText: 'OK'
            })

        const dataEntries = response.data.data;
        dataEntries.map(element => {
            console.log(`Time stamp : ${element.datetime} Weather : ${JSON.stringify(element.weather)}` )
        });

        
    })
})