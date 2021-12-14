export interface Reserve{
    record_date: Date,
    facility_desc: string,
    form_desc: string,
    location_desc: string,
    fine_troy_ounce_qty: number,
}

//     Example data: 
    
    
//   "data": [
//     {
//       "record_date": "2012-01-31",
//       "facility_desc": "Mint Held Gold - Deep Storage",
//       "form_desc": "Gold Bullion",
//       "location_desc": "Denver, CO",
//       "fine_troy_ounce_qty": "43853707.279",
//       "book_value_amt": "1851599995.81",
//       "src_line_nbr": "1",
//       "record_fiscal_year": "2012",
//       "record_fiscal_quarter": "2",
//       "record_calendar_year": "2012",
//       "record_calendar_quarter": "1",
//       "record_calendar_month": "01",
//       "record_calendar_day": "31"
//     },
//     {
//       "record_date": "2012-01-31",
//       "facility_desc": "Mint Held Gold - Deep Storage",
//       "form_desc": "Gold Bullion",
//       "location_desc": "Fort Knox, KY",
//       "fine_troy_ounce_qty": "147341858.382",
//       "book_value_amt": "6221097412.78",
//       "src_line_nbr": "2",
//       "record_fiscal_year": "2012",
//       "record_fiscal_quarter": "2",
//       "record_calendar_year": "2012",
//       "record_calendar_quarter": "1",
//       "record_calendar_month": "01",
//       "record_calendar_day": "31"
//     },