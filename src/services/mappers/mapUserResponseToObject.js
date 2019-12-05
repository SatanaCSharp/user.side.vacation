export default function (res) {
    const {data:{user, vacationBalance: { amount}}} = res;
    const hiredDate = user.hiredDate.substr(0, 10)
    return {
        ...user,
        hiredDate,
        vacationBalance: amount
    }
}