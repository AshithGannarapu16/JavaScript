a(function (resultsFromA){
    b(resultsFromA, function(resultsFromB){
        c(resultsFromB,function(resultsFromC){
            d(resultsFromC,function(resultsFromD){
                e(resultsFromD, function(resultsFromE){
                    f(resultsFromE,function(resultsFromF){
                        console.log(resultsFromF)
                    })
                })
            })
        })
    })
})

resultsFromA()