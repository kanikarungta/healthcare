const initialState = {
    'credentials': [
        {c_id:1, email:'doctor', password:'doctor', designation:'Doctor'},
        {c_id:7, email:'Arun', password:'doctor', designation:'Doctor'},
        {c_id:2, email:'patient', password:'patient', designation:'Patient'},
        {c_id:3, email:'pharmacist', password:'pharmacist', designation:'Pharmacist'},
        {c_id:4, email:'bobby', password:'bobby', designation:'Patient'},
        {c_id:5, email:'charu', password:'charu', designation:'Patient'},
        {c_id:6, email:'dhanvi', password:'dhanvi', designation:'Patient'},
        ],
    
    'patientDetails': [
        {p_id: 1, c_id:2, name: 'Aman',email: 'patient', age: 24, gender:'m', nationality: 'indian', ailments:'cough, cold', prescription:[{medicine:'Amoxicillin', days:5, perDay:2},{medicine:'Azithromycin', days:3, perDay:2}, {medicine:'Ciprofloxacin', days:5, perDay:1}], nextVisit: '10/06/2020 15:00'},

        {p_id: 2, c_id:4, name: 'Bobby',email: 'bobby', age: 26, gender:'f', nationality: 'german', ailments:'cough, fever', prescription:[{medicine:'Ibuprofen', days:5, perDay:2}, {medicine:'Cephalexin', days:3, perDay:3}, {medicine:'Azithromycin', days:7, perDay:1}], nextVisit: '10/05/2020 10:30'},

        {p_id: 3, c_id:5, name: 'Charu', email: 'charu', age: 46, gender:'f', nationality: 'italian', ailments:'fever, cold', prescription:[{medicine:'Amoxicillin', days:5, perDay:1}, {medicine:'Paracetamol', days:5, perDay:2}, {medicine:'Azithromycin', days:7, perDay:2}], nextVisit: '6/30/2020 11:00'},

        {p_id: 4, c_id:6, name: 'Dhanvya',email: 'dhanvya', age: 18, gender:'m', nationality: 'french', ailments: 'asthma, cold', prescription:[{medicine:'Ibuprofen', days:5, perDay:2}, {medicine:'Cephalexin', days:3, perDay:1}, {medicine:'Paracetamol', days:7, perDay:2}], nextVisit: '3/06/2020 12:15'}  
    ],
    columns: [
        { title: 'ID', field: 'p_id', type: 'numeric' },
        { title: 'Name', field: 'name' },
        { title: 'Email', field: 'email' },
        { title: 'Age', field: 'age', type: 'numeric' },
        { title: 'Gender', field: 'gender', lookup: { 'm': 'Male', 'f': 'Female', 'o': 'Others' }, },
        { title: 'Nationality', field: 'nationality', lookup: { 'indian': 'Indian', 'german': 'German', 'italian': 'Italian', 'french': 'French' }},
        { title: 'Next Visit', field: 'nextVisit', type: 'datetime' },
        { title: 'Ailments', field: 'ailments'}
    ],
    pharmacistColumns: [
        { title: 'ID', field: 'p_id', type: 'numeric' },
        { title: 'Name', field: 'name' },
        { title: 'Email', field: 'email' },
        { title: 'Age', field: 'age', type: 'numeric' },
        { title: 'Gender', field: 'gender', lookup: { 'm': 'Male', 'f': 'Female', 'o': 'Others' }, },
        // { title: 'Nationality', field: 'nationality', lookup: { 'indian': 'Indian', 'german': 'German', 'italian': 'Italian', 'french': 'French' }}
    ],
    prescriptionColumns: [
        { title: 'Medicine', field: 'medicine' , lookup: { 'Amoxicillin': 'Amoxicillin', 'Azithromycin': 'Azithromycin', 'Cephalexin': 'Cephalexin', 'Ibuprofen': 'Ibuprofen', 'Ciprofloxacin': 'Ciprofloxacin', 'Paracetamol': 'Paracetamol' }},
        { title: 'Days', field: 'days', type: 'numeric' },
        { title: 'PerDay', field: 'perDay', type: 'numeric' },
    ],
    costOfMedicines: {'Amoxicillin': 8.25, 'Azithromycin': 7, 'Cephalexin': 15, 'Ibuprofen': 3, 'Ciprofloxacin': 50, 'Paracetamol': 1},
    isAuth: false,
    email: '',
    designation: '',
    c_id: null,
    patient_details : null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGINDETAILS': {
            let patient_details = null
            if (action.designation === 'Patient') {
                patient_details = state.patientDetails.filter(patient => {
                    return patient.c_id === action.c_id
                })
            }
            patient_details = patient_details && patient_details.length && patient_details[0]
            return {...state, email:action.email, designation:action.designation, c_id:action.c_id, patient_details, isAuth: action.isAuth}
        }

        case 'LOGOUT' : {
            localStorage.clear('designation')
            return {...state, isAuth: false, designation : '', patient_details: null}
        }

        case 'SAVEPATIENTDETAILS' : {
            return {...state, patientDetails: action.data}
        }

       default: return {...state}
    }
 }
 export default reducer