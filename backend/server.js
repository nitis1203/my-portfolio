const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

const LEETCODE_API_URL = 'https://leetcode.com/graphql';

app.get('/leetcode/:username', async (req, res) => {
  const username = req.params.username;

  try {
    const response = await axios.post(LEETCODE_API_URL, {
      query: `
        query getUserProfile($username: String!) {
          matchedUser(username: $username) {
            profile {
              ranking
            }
            submitStats {
              acSubmissionNum {
                difficulty
                count
              }
            }
          }
        }
      `,
      variables: { username }
    });

    const data = response.data.data.matchedUser;

    const result = {
      rank: data.profile.ranking,
      problemsSolved: {
        easy: data.submitStats.acSubmissionNum.find(item => item.difficulty === 'Easy').count,
        medium: data.submitStats.acSubmissionNum.find(item => item.difficulty === 'Medium').count,
        hard: data.submitStats.acSubmissionNum.find(item => item.difficulty === 'Hard').count
      }
    };

    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching data' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
