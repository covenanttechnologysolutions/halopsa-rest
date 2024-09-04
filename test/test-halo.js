/**
 * Created by kgrube on 9/11/2018
 */
/* eslint-disable @typescript-eslint/no-var-requires */
const dotenv = require('dotenv')
const path = require('path')
const { HaloAPI } = require('../dist')
const assert = require('assert')
const { describe, it } = require('mocha')
const { isPromise } = require('./test-utils.js')

dotenv.config({ path: path.join(__dirname, '.env') })

const {
  HALO_API_CLIENT_ID,
  HALO_API_CLIENT_SECRET,
  HALO_API_SCOPE,
  HALO_API_URL,
} = process.env

const halo = new HaloAPI({
  clientId: HALO_API_CLIENT_ID,
  clientSecret: HALO_API_CLIENT_SECRET,
  scope: HALO_API_SCOPE,
  companyUrl: HALO_API_URL,
})

halo.TicketsAPI.getTickets().then(results => {
  console.log(results)
})

// describe('Halo', () => {
//   describe('instance', () => {
//     it('should be an instance of Halo', (done) => {
//       assert(halo instanceof HaloAPI)
//       done()
//     })
//
//     it('should have CompanyAPI', (done) => {
//       assert(cwm.CompanyAPI)
//       done()
//     })
//
//     it('should have ConfigurationsAPI', (done) => {
//       assert(cwm.ConfigurationsAPI)
//       done()
//     })
//
//     it('should have ExpenseAPI', (done) => {
//       assert(cwm.ExpenseAPI)
//       done()
//     })
//
//     it('should have FinanceAPI', (done) => {
//       assert(cwm.FinanceAPI)
//       done()
//     })
//
//     it('should have MarketingAPI', (done) => {
//       assert(cwm.MarketingAPI)
//       done()
//     })
//
//     it('should have ProcurementAPI', (done) => {
//       assert(cwm.ProcurementAPI)
//       done()
//     })
//
//     it('should have ProjectAPI', (done) => {
//       assert(cwm.ProjectAPI)
//       done()
//     })
//
//     it('should have SalesAPI', (done) => {
//       assert(cwm.SalesAPI)
//       done()
//     })
//
//     it('should have ScheduleAPI', (done) => {
//       assert(cwm.ScheduleAPI)
//       done()
//     })
//
//     it('should have ServiceAPI', (done) => {
//       assert(cwm.ServiceAPI)
//       done()
//     })
//
//     it('should have SystemAPI', (done) => {
//       assert(cwm.SystemAPI)
//       done()
//     })
//
//     it('should have TimeAPI', (done) => {
//       assert(cwm.TimeAPI)
//       done()
//     })
//   })
//
//   describe('ServiceAPI', () => {
//     describe('getServiceTicketsById', () => {
//       it('should return a ticket object', (done) => {
//         cwm.ServiceAPI.getServiceTicketsById(123456).then((result) => {
//           if (!result) {
//             done('No result')
//           }
//           const { id, summary } = result
//           assert(id, summary)
//           done()
//         }).catch((err) => {
//           console.error(err)
//           done(err)
//         })
//       })
//     })
//
//     describe('getServiceTickets', () => {
//       it('should return an array of ticket objects', (done) => {
//         cwm.ServiceAPI.getServiceTickets({ pageSize: 1 }).then(([ticket]) => {
//           assert(ticket.id)
//           assert(ticket._info)
//           assert(ticket._info.dateEntered)
//           return done()
//         }).catch((err) => done(err))
//       })
//     })
//
//     describe('error', () => {
//       it('should return a 404 not found error', (done) => {
//         cwm.ServiceAPI.getServiceBoardsByGrandparentIdItemsByParentIdAssociations(9999, 9999).
//           then(() => {
//             return done(new Error('Incorrect response'))
//           }).
//           catch((err) => {
//             assert(err)
//             assert(err.status === 404)
//             done()
//           })
//       })
//     })
//   })
//
//   describe('pagination', () => {
//     it('should return an array of CommunicationTypes', (done) => {
//       cwm.paginate(cwm.CompanyAPI.getCompanyCommunicationTypes, { pageSize: 2, startPage: 1 }, {}).
//         then((results) => {
//           assert(Array.isArray(results))
//           assert(results.length > 0)
//           const firstType = results.pop()
//           assert(firstType.id)
//           assert(firstType.description)
//           assert(firstType._info)
//           done()
//         }).
//         catch((err) => done(err))
//     })
//
//     it('should return the same number of items', (done) => {
//       cwm.paginate(cwm.CompanyAPI.getCompanyCommunicationTypes, { pageSize: 2, startPage: 1 }, {}).
//         then((pagedResults) => {
//           return cwm.CompanyAPI.getCompanyCommunicationTypes({ pageSize: 50 }).then(
//             (unPagedResults) => {
//               assert(unPagedResults.length === pagedResults.length)
//               done()
//             },
//           )
//         }).
//         catch((err) => done(err))
//     })
//   })
// })
//
// describe('utils', () => {
//   it('should have utils property', (done) => {
//     assert(utils)
//     done()
//   })
//
//   describe('Callback', () => {
//     it('should have Callback property', (done) => {
//       assert(utils.Callback)
//       done()
//     })
//   })
//
//   describe('Series', () => {
//     it('should have Series property', (done) => {
//       assert(utils.Series)
//       done()
//     })
//
//     it('should return a promise', (done) => {
//       const promises = utils.Series.all({ series: [new Promise((resolve) => resolve(true))] })
//       assert(isPromise(promises))
//       done()
//     })
//
//     it('should resolve an array of results', (done) => {
//       utils.Series.all({ series: [new Promise((resolve) => resolve(true))] }).then((results) => {
//         assert(results[0] === true)
//         done()
//       }).catch((error) => done(error))
//     })
//
//     it('should resolve an array of results', (done) => {
//       utils.Series.all({ series: [() => true] }).then((results) => {
//         assert(results[0] === true)
//         done()
//       }).catch((error) => done(error))
//     })
//
//     it('should resolve an array of results', (done) => {
//       utils.Series.all({
//         series: [() => new Promise((resolve) => resolve(true))],
//       }).then((results) => {
//         assert(results[0] === true)
//         done()
//       }).catch((error) => done(error))
//     })
//   })
// })
