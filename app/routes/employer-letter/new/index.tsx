export default function NewJokeRoute() {
  return (
    <div>
      <p>Submit your employer letter request</p>
      <form method="post">
        <div>
          <label>
            First: <input type="text" name="first" />
          </label>
        </div>
        <div>
          <label>
            Last: <input name="last" />
          </label>
        </div>
        <div>
          <label>
            Start Date: <input type="date" name="sdate" />
          </label>
        </div>
        <div>
          <label>
            End Date: <input type="date" name="edate" />
          </label>
        </div>
        <div>
          <label>
            Location: <input type="text" name="location" />
          </label>
        </div>
        <div>
          <button type="submit" className="button">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
