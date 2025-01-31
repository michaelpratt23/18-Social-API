const mongoose = require("mongoose");
const { User, Thought } = require("./models");

// Connect to MongoDB
mongoose.connect("mongodb://localhost/social-network-API", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Sample Users
const users = [
  {
    username: "john_doe",
    email: "john@example.com",
  },
  {
    username: "jane_smith",
    email: "jane@example.com",
  },
  {
    username: "sam_wilson",
    email: "sam@example.com",
  },
];

// Sample Thoughts
const thoughts = [
  {
    thoughtText: "This is my first thought!",
    username: "john_doe",
  },
  {
    thoughtText: "I love coding in JavaScript!",
    username: "jane_smith",
  },
  {
    thoughtText: "MongoDB is great for NoSQL applications.",
    username: "sam_wilson",
  },
];

// Seed Function
const seedDatabase = async () => {
  try {
    // Clear existing data
    await User.deleteMany({});
    await Thought.deleteMany({});

    // Insert Users
    const createdUsers = await User.insertMany(users);

    // Assign user IDs to thoughts
    const userMap = createdUsers.reduce((map, user) => {
      map[user.username] = user._id;
      return map;
    }, {});

    thoughts.forEach((thought) => {
      thought.userId = userMap[thought.username];
    });

    // Insert Thoughts
    await Thought.insertMany(thoughts);

    console.log("✅ Database seeded successfully!");
    mongoose.connection.close();
  } catch (err) {
    console.error("❌ Seeding error:", err);
    mongoose.connection.close();
  }
};

// Run seeding function
seedDatabase();
