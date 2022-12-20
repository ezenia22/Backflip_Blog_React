import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    main: {
        textAlign: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgb(168, 133, 15)',
        height: '100%',
        width: '100%',
        fontFamily: 'Helvetica',
        fontSize: '25px',
        marginBottom: 20,
        color: 'rgba(245, 245, 245, 0.973)',
        padding: '50px 0',
        borderRadius: 15,
    },
    container: {
        display: 'grid',
        gridTemplateColumns: 'auto auto',
        gap: '5px',
        flexWrap: 'wrap',
    },    
    post: {
        paddingTop: '3%',
        marginLeft: '5%',
    },
    form: {
        paddingLeft: '8%',
        paddingRight: '5%',
        paddingTop: '3%',
    },
    header: {
        marginBottom: '5%'
    },    
    bullet: {
        listStyleType: 'none',
    },    
    button1: {
        border: 'none',
        color: 'white',
        padding: '15px 32px',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '16px',
        margin: '4px 2px',
        marginRight: '40px',
        cursor: 'pointer',
        backgroundColor: '#4CAF50',
        transitionDuration: '0.4s',
        '&:hover': {
            borderRadius: '50px 50px 50px 50px',
            padding: '16px 36px',
        },
    },      
    button2: {
        border: 'none',
        color: 'white',
        padding: '15px 22px',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '16px',
        margin: '4px 2px',
        cursor: 'pointer',
        backgroundColor: '#e9441b',
        transitionDuration: '0.4s',
        '&:hover': {
            borderRadius: '50px 50px 50px 50px',
            padding: '16px 26px',
        },
    },    
    smallDesc: {
        fontFamily: 'Arial',
        fontSize: '10px',
    },
    banner: {
        borderRadius: 25,
    }
}));