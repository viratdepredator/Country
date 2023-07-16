var countrySateCityinfo = {
   India:{
    "Uttar Pradesh":{
        "Kanpur":[208001,208002,208003,208004],
        "Lucknow":[226001,226002,226003,226004],
        "Agra":[223007,282001,282002,282003],
        "Prayagraj":[211001,211002,211003,211004]
    },
    "Bihar":{
        "Patna":[800001,800002,800003,800004],
        "Darbhanga":[846001,846002,846003,846004]
    },
    "Jharkhand":{
        "Ranchi":[834001,834002,834003,834004],
        "Bokaro":[827001,827002,827003,827004]
    },
    "West Bengal":{
        "Kolkata":[700001,700002,700003,700004],
        "purulia":[734001,734003]
    }
   },
    Australia: {
        "Western Australia": {
            "Broome": [6725, 6318, 6701],
            "Coolgardie": [6429, 6432]
        },
        "Tasmania": {
            "Hobart": [7000, 7520],
            "Launceston": [7250, 7334],
            "Burnie": [7320, 7315]
        }
    },
    Germany: {
        "Bavaria": {
            "Munich": [80331, 80333, 80335],
            "Numemberg": [90402, 90403, 90404]
        },
        "Hessen": {
            "Frankfurt": [60306, 60309, 60310],
            "Surat": [55246, 55247, 55248, 55249]
        }
    },

    Canada: {
        "Alberta": {
            Calgary: [8033, 8333, 8035],
            Edmonton: [9040, 9403, 9040]
        },
        "Manitoba": {
            Brandon: [6030,6030],
            Winnipeg: [5524,5547,5248]
        }
    }

    
}

window.onload = function(){
    const selectCountry = document.getElementById('country'),
        selectState = document.getElementById('state'),
        selectCity = document.getElementById('city'),
        selectZip = document.getElementById('zip'),
        selects = document.querySelectorAll('select')

        selectState.disabled = true
        selectCity.disabled = true
        selectZip.disabled = true

        selects.forEach(select => {
            if(select.disabled == true){
                select.style.cursor = "auto"
            }
            else{
                select.style.cursor = "pointer"
            }
        })

        for(let country in countrySateCityinfo){
            // console.log(country);
            selectCountry.options[selectCountry.options.length] = new Option(country, country)
        }


        // country change
        selectCountry.onchange = (e) =>{
            
            selectState.disabled = false
            selectCity.disabled = true
            selectZip.disabled = true

            selects.forEach(select => {
                if(select.disabled == true){
                    select.style.cursor = "auto"
                }
                else{
                    select.style.cursor = "pointer"
                }
            })

            selectState.length = 1
            selectCity.length = 1
            selectZip.length = 1

            for(let state in countrySateCityinfo[e.target.value]){
                // console.log(state);
                selectState.options[selectState.options.length] = new Option(state, state)
            }
        }

        // state change
        selectState.onchange = (e) =>{
            selectCity.disabled = false
            selectZip.disabled = true

            selects.forEach(select => {
                if(select.disabled == true){
                    select.style.cursor = "auto"
                }
                else{
                    select.style.cursor = "pointer"
                }
            })

            selectCity.length = 1
            selectZip.length = 1

            for(let city in countrySateCityinfo[selectCountry.value][e.target.value]){
                // console.log(city);
                selectCity.options[selectCity.options.length] = new Option(city, city)
            }
        }

        // change city
        selectCity.onchange = (e) =>{
            selectZip.disabled = false

            selects.forEach(select => {
                if(select.disabled == true){
                    select.style.cursor = "auto"
                }
                else{
                    select.style.cursor = "pointer"
                }
            })
            
            selectZip.length = 1

            let zips = countrySateCityinfo[selectCountry.value][selectState.value][e.target.value]
            
            for(let i=0; i<zips.length; i++){
                selectZip.options[selectZip.options.length] = new Option(zips[i], zips[i])
            }
        }
}
