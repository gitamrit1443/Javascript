// realcase booking system if seat is vacant assign it to user

const Status=[
    {seatNumber:1,isbooked:true},
    {seatNumber:2,isbooked:true},
    {seatNumber:3,isbooked:false},
    {seatNumber:4,isbooked:true},
    {seatNumber:5,isbooked:true},
    {seatNumber:6,isbooked:false},
    {seatNumber:7,isbooked:true},
    {seatNumber:8,isbooked:false},
]
let user="Karan";
let grantSeat=Status.find(s=>s.isbooked==false);
if(grantSeat!="undefined")
{
    grantSeat.isbooked=true;
    console.log(`Sucessfully granted Seat with SeatNumber : ${grantSeat.seatNumber} to user : ${user} \nthanks for choosing us`);
}
else{
    console.log("Seat is already booked better luck next time");
}

