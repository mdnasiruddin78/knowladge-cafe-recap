import profile from '../../assets/images/profile.png'

const header = () => {
    return (
        <header className='w-11/12 mx-auto flex items-center justify-between
         p-4 border-b-2'>
             <h1 className='text-4xl font-bold'>Knowladge Cafe</h1>
             <img src={profile} alt="" />
        </header>
    );
};

export default header;