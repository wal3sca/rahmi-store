import { Form } from "react-bootstrap";
import { Button } from "bootstrap";

function Login() {
  return (
    <Form action="/action_page.php">
      <div class="form-group">
        <label for="email">Email address:</label>
        <input type="email" class="form-control" id="email" />
      </div>
      <div class="form-group">
        <label for="pwd">Password:</label>
        <input type="password" class="form-control" id="pwd" />
      </div>
      <div class="checkbox">
        <label>
          <input type="checkbox" /> Remember me
        </label>
      </div>
      <Button type="submit" class="btn btn-default">
        Submit
      </Button>
    </Form>
  );
}

export default Login;
