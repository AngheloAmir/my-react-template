/*
    * TYPE
        Layout - A layout 

    * DESCRIPTION
        Handle the appearance of the home page

    * VISIBLE WHEN
        The user is at home page

    **To modify, just remove the content of the return statement of HomeLayout
*/
import './layout/home.scss';
import Content from '../UIElements/TestDesign/Content';

interface propsReceive {
    onButtonPress       :() => void;
    message             :string;
}

export default function HomeLayout( props :propsReceive ) {
    return (
        <div id='Home'>
            <div className='sidebar'> I am a side bar</div>
            <div className='content'>
                <div className='navbar'>This is the navbar </div>
                <div className='display'>
                    <Content
                        onButtonPress={props.onButtonPress}
                        message={props.message}
                    />
                </div>
            </div>
        </div>
    );
}
