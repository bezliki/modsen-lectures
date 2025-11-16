const promises = [
 Promise.resolve('Успех 1'),
 Promise.reject('Ошибка'),
 Promise.resolve('Успех 2')
];

Promise.all(promises)
 .then(results => console.log('all:', results))
 .catch(error => console.log('all ошибка:', error));

Promise.allSettled(promises)
 	.then(results => console.log('allSettled:', results));

    //all ошибка:Ошибка , тк all отклонится при первой же ошибке
    //allSettled: { status: 'fulfilled', value: 'Успех 1' }, { status: 'rejected',  reason: 'Ошибка' },{ status: 'fulfilled', value: 'Успех 2' }
    //allSettled ожидает завершени всех промисов и возвр массив обзектом 
    // status: value/reason