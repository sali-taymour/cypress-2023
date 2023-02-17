describe( 'My first Test', function (){
    it('My first Test', function (){
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.product').should('have.length',5)
        cy.get('.product:visible ').should('have.length',4)
        //parent child
        cy.get('.products').find('.product').should('have.length',4)
        //Automatic sellector
        cy.get(':nth-child(3) > .product-action > button').click()
        //.eq(2) get me the second item
         cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()

        // iterate through an array
         cy.get('.products').find('.product').each(($le, index, $list)=>{
         const textVeg=$le.find('h4.product-name').text()
                if(textVeg.includes('Cashews'))
                
                {        
                       $le.find('button').click()
            }
         })
         cy.get(".brand").should('have.text','GREENKART')


        // to print the loge name you have 
         cy.get('.brand').then(function(logoelement){
           cy.log(logoelement.text()) 
         })

        })
       
}) 