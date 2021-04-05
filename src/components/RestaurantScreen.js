import RestaurantList from './RestaurantList';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export default function RestaurantScreen() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">Restaurants</Typography>
        <RestaurantList />
      </CardContent>
    </Card>
  );
}
