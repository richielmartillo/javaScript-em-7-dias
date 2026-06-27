function saleStatus(status, total, customerName, isVip) {
    let discount = 0
    let tax = 0
    let finalTotal = total
    let message = ''

    if (total <= 0) {
        console.log('Invalid transaction. Total amount must be greater than zero.')
        return
    }

    if (isVip === true) {
        discount = total * 0.10
    } else if (total >= 1000) {
        discount = total * 0.05
    } else {
        discount = 0
    }

    tax = total * 0.08
    finalTotal = total - discount + tax

    if (status === 'Approved') {
        message = 'Transaction approved successfully!'
    } else if (status === 'Pending') {
        message = 'Transaction is pending. Please wait for confirmation.'
    } else if (status === 'Rejected') {
        message = 'Transaction rejected. Please check the payment method.'
    } else {
        message = 'Unknown transaction status.'
    }

    console.log('Customer: ' + customerName)
    console.log('Status: ' + status)
    console.log('Original total: $' + total)
    console.log('Discount: $' + discount)
    console.log('Tax: $' + tax)
    console.log('Final total: $' + finalTotal)
    console.log(message)

    return {
        customerName: customerName,
        status: status,
        originalTotal: total,
        discount: discount,
        tax: tax,
        finalTotal: finalTotal,
        isVip: isVip
    }
}

let saleOne = saleStatus('Approved', 1000, 'Richard', true)

console.log(saleOne)