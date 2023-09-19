import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './MatchupPage.css';
import '../Fonts.css';
import { weeklyResults } from './results.js';
import { backButton } from '../constants';

const MatchupPage = () => {
  const { pathname } = useLocation();
  const currentURL = pathname.split('/')[2];
  const [awayTeam, homeTeam] = currentURL.split('At');
  const results = weeklyResults.find(
    (element) =>
      element.split(',')[0] === awayTeam || element.split(',')[2] === awayTeam
  );
  const [
    finalResultsWinner,
    finalResultsWinnerPoints,
    finalResultsLoser,
    finalResultsLoserPoints,
    finalResultsPercent,
  ] = results.split(',');

  return (
    <div className='nflSiteText'>
      <h1 className='lightText'>
        {awayTeam}
        {' at the '}
        {homeTeam}
      </h1>

      <div className='row lightText'>
        <div className='col-12'>
          {finalResultsPercent}% chance of {finalResultsWinner} winning
        </div>
      </div>
      <div className='row lightText'>
        <div className='col-12'>Loser: {finalResultsLoser}</div>
      </div>
      <Link to='/2332220'>
        <button className='matchupButton nflSiteText'>{backButton}</button>
      </Link>
    </div>
  );
};

export default MatchupPage;
