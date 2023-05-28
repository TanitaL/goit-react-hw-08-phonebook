import { ViewContainer } from 'GlobalStyles.styled';
import { useSelector, useDispatch } from 'react-redux';
import { StyledButton } from '../../../GlobalStyles.styled';
import { useNavigate } from 'react-router-dom';
import { setPath } from 'redux/auth/authSlice';
import css from "./HomeView.module.css"

const HomeView = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const userName = useSelector(store => store.auth.user.name);

  const onGettingStarted = () => {
    isLoggedIn && dispatch(setPath('/contacts'));
    navigate('/contacts');
  };
  return (
    <ViewContainer className={css.bgImage}>
        {isLoggedIn ? (
          <>
          <div className={css.textBox}>
            <h1 className={css.greetingTextLoggedIn}>{`Welcome, ${userName.toUpperCase()}!`}</h1>
              <StyledButton variant="contained" onClick={onGettingStarted}>
                Start
              </StyledButton>
            </div> 
          </>
        ) : (
            <>
            <h1 className={css.greetingText}>Create your phonebook</h1>
          </>
        )}
    </ViewContainer>
  );
};
export default HomeView;
