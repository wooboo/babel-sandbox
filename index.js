import axios from 'axios';

const f = o => {
  return { value: o };
};

function* values(x) {
  yield x;
  yield x;
  yield x;
}
async function go(){
    const user = await axios.get('https://randomuser.me/api/');
    console.log({ ...f([...values("world")]), ...user.data });    
}

go();
