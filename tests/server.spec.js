const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server/app');

chai.use(chaiHttp);
const expect = chai.expect;

server.listen(4444);

describe('server/app.js', function() {
  this.timeout(5000);
  beforeEach((done) => {
    
    done();
  });

  afterEach((done) => {
      done();
  })

  it('responds to /', (done) => {
    chai.request(server)
      .get('/')
      .end((err, res) => {
        expect(err).not.exist;
        expect(res).to.have.status(200);
        done();
      });
  });

  it('page says Life', (done) => {
  chai.request(server)
    .get('/')
    .end((err, res) => {
      expect(err).not.exist;
      expect(JSON.stringify(res.text)).to.contain('Hello World');
      done();
    
    });
    
  });
  
})
it('should contain a <h1> element for the page title', () => {
  pageObject
    .evaluate(() => document.querySelector('h1').innerText)
    .then(headerText => {
      expect(headerText).to.not.be.null;
      expect(headerText).to.equal('Mortgage Calculator');
  })
});

