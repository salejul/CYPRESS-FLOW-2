describe('HTTP Example', () => {
    it('TESTS GET METHOD', () => {

        cy.request({
            method: "GET",
            url: "https://httpbin.org/get"
        }).then(Response => {
            expect(Response.body).to.have.property('url')
        })

    })

    it('TESTS POST METHOD', () => {

        cy.request({
            method: "POST",
            url: "https://httpbin.org/post",
            body: {
                "name": "Mary",
                "age": 56

            },
            headers: {
                "content-type": "application/json"
            }
        }).then(Response => {
            expect(Response.body).to.have.property('json');
            expect(Response.body.json).to.deep.equal(
                {
                    "name": "Mary",
                    "age": 56
                })
        })

    })

    it('TESTS PUT METHOD', () => {

        cy.request({
            method: "PUT",
            url: "https://httpbin.org/put",
            body: {
                "name": "Marco",

            }
        }).then(Response => {
            expect(Response.body).to.have.property('json');
            expect(Response.body.json).to.deep.equal(
                {
                    "name": "Marco",

                })
        })

    })

    it('TESTS PATCH METHOD', () => {

        cy.request({
            method: "PATCH",
            url: "https://httpbin.org/patch",
            body: {
                "name": "Marco 1",

            }
        }).then(Response => {
            expect(Response.body).to.have.property('json');
            expect(Response.body.json).to.deep.equal(
                {
                    "name": "Marco 1",
                })
        })

    })

})
