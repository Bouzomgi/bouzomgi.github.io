import "@styles/service.css";

export default function Page() {
  const title = "St John the Divine";

  const projectDescription = '"Prep Bagged Breakfasts"';

  const background = `Morningside Heights, Manhattan, is home to the Cathedral Church of Saint John the Divine, the largest Gothic cathedral in the world. Twenty-five feet below the Bishop's sermon, a bustling soup kitchen operates every Sunday, run by Cathedral Community Cares (CCC). Though the kitchen has full-time staff, it largely relies on volunteers who turn the cathedral’s sermon into action by serving meals to Morningside Heights' food-insecure population.`;

  const history = `With a rich history spanning over 25 years, the soup kitchen has seen many changes. Longtime volunteers recall a time when half of the volunteers came from New York Cares, while the rest were Duke alumni or white-collar professionals, particularly from financial firms. These corporate groups had varied impacts—some failed to show up, leaving the kitchen understaffed, while others donated funds for special ingredients, allowing for more elaborate meals. Some groups arrived with built-in chemistry, streamlining operations and finishing service early.

Before COVID, St. John’s offered both breakfast and lunch in a restaurant-style indoor setting. When the pandemic hit, the kitchen shifted to a strictly to-go model, and many clients grew accustomed to it. Though St. John’s has reintroduced indoor dining, turnout remains low—typically one to three people, with slight increases on cold or rainy days. Despite this, CCC remains committed to offering a warm meal under a solid roof, which for many may be the only shelter they enter that day.`;

  // Experience
  const arrival = `New York Cares lists the project from 9 AM to noon, but cooks arrive as early as 7 AM to prepare the day’s meal. Early volunteers and the team leader tend to arrive by 8:30 AM. The project takes place in the cathedral’s basement, split between the gymnasium and the kitchen.

In the gym, volunteers set up six tables for indoor dining, two long tables for sandwich preparation, and five more for bagging. Upon arrival, volunteers store their belongings in gym lockers, wash up, and don aprons, gloves, and hairnets (or hats as an alternative).`;

  const mealPreparation1 = `While the kitchen staff prepares the hot meal, volunteers in the gym assemble its cold counterpart. Early arrivals are assigned to either the peanut butter and jelly (PB&J) or tuna sandwich stations.`;

  const mealPreparationLI1 = `Tuna Table: Volunteers work with two large metal bowls of tuna salad, assembling and wrapping sandwiches in foil before labeling them with stickers.`;
  const mealPreparationLI2 = `PB&J Table: More intricate than the tuna station, this process involves spreading peanut butter on both slices of bread before adding jelly to prevent seepage. The stiffness of the bread and peanut butter can make sandwich-making tricky, but seasoned volunteers have developed techniques to prevent tearing.`;

  const mealPreparation2 = `As both stations race to finish their assigned loaves, five volunteers assemble the complete cold meal: a PB&J, a tuna sandwich, yogurt, and sometimes an apple, all packed into brown paper bags. These are then placed into shopping baskets to be transported upstairs.

Once the hot meal is ready, volunteers transition to an assembly line in the kitchen, packing freshly cooked food into containers. Each week’s menu includes a protein (such as tilapia, chicken cutlets, or meatballs), a starch (like mashed potatoes or spaghetti), and a vegetable (typically a mixed medley or collard greens). Like the cold meals, hot meals are carried upstairs in batches.`;

  const distribution = `At the church basement’s entrance, volunteers organize meal bags containing a hot meal, cold meal, drink, and occasionally extras like granola bars. St. John’s clients line up outside along the roadway to receive their meals, with volunteers offering coffee while they wait.
  
For those who opt to eat indoors, a volunteer or staff member escorts them to the gymnasium, where they enjoy their meal at a table. Once finished, they receive the cold meal to take with them.`;

  const specialOccasions = `On major holidays, St. John’s serves festive meals. Around Thanksgiving and Christmas, clients may receive turkey or specialty roasted chicken, and volunteers prepare desserts (such as slices of pie) packaged separately for distribution.`;

  const myTake = `“Prep Bagged Breakfasts” was the second New York Cares project I ever attended. By coincidence (and without prior knowledge), my first experience happened to fall on St. Francis Day, which St. John’s celebrates with its Blessing of the Animals. On this day, churchgoers bring their animals to the cathedral for blessing. The event’s unique logistics meant volunteers had to prepare meals in a separate building, creating an atypical but memorable experience. I loved my first experience at St. John’s and quickly signed up for another shift.

One visit turned into two, then three, and soon I became a regular. I started at the peanut butter table, but when the team lead needed a dishwasher, I was assigned the role. After gaining a reputation at the sink, I was eventually pulled into the kitchen for food preparation—a first-time experience in a commercial kitchen, fulfilling an "in another life" dream of mine. Before long, I became an alternate cook on Sundays, stepping in when extra hands were needed.

Over time, I got to know the regulars and staff while learning the ins and outs of the project. By August 2024, I noticed a team leader was needed for the 18th. Though I had never led a project before, this was the one I knew best. With support from past team leaders and regulars, the week was a success.

Later that year, in December, New York Cares reached out—on the recommendation of a longtime team lead—to see if I’d take on a regularly scheduled leadership role. I accepted and chose the last week of each month.

I love St. John’s. The regulars are passionate, the work is predictable, and we always have a blast. I look forward to leading the project every month.

I give this opportunity a mega RECOMMEND!`;

  return (
    <div className="main">
      <div className="page full-page">
        <div className="title-block">
          <h1>{title}</h1>
          <p>{projectDescription}</p>
        </div>

        <h2>Background</h2>
        <p>{background}</p>

        <h2>History</h2>
        <p>{history}</p>

        <h2>Experience</h2>
        <h3>Arrival</h3>
        <p>{arrival}</p>
        <h3>Meal Preparation</h3>
        <p>{mealPreparation1}</p>
        <ul>
          <li>{mealPreparationLI1}</li>
          <li>{mealPreparationLI2}</li>
        </ul>
        <p>{mealPreparation2}</p>

        <h2>Distribution</h2>
        <p>{distribution}</p>

        <h2>Special Occasions</h2>
        <p>{specialOccasions}</p>

        <hr />

        <h2>My Take</h2>
        <p>{myTake}</p>
      </div>
    </div>
  );
}
