const server = 'https://jsonplaceholder.typicode.com/posts';

const sendData = (data, callBack, falseCallBack) => {
   const request = new XMLHttpRequest();
   request.open('POST', server);

   request.addEventListener('readystatechange', () => {
       if (request.readyState !==4) return;
       if (request.status === 200 || request.status === 201) {
           const response = JSON.parse(request.responseText);
           callBack(request.responseText);
       } else {
           falseCallBack(request.statusText)
           new Error(request.status);
       }
   })

   request.send(data);
};

const dataTest = {
    name: 'Alex',
    phone: '375-49-48'
};

sendData(JSON.stringify(dataTest),
    (data) => {
alert('Ваша завка №' + id + '! \nВ ближайшее время с вами свяжемся');
},
    (err) => {
    alert ('ошибка' + err)
    });
