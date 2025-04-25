// DSARoadmap.js
import React, { useState, useEffect } from 'react';
import { FaCheck, FaChevronDown, FaChevronUp, FaExternalLinkAlt, FaLock } from 'react-icons/fa';
import './DSAroadmap.css'; // You'll need to create this CSS file or use your app's styling approach

function DsaRoadmap() {
  // Main data structure for the roadmap
  const [categories, setCategories] = useState([
    {
      id: 1,
      name: "Arrays & Hashing",
      expanded: true,
      completed: 0,
      total: 9,
      problems: [
        { id: 101, name: "Contains Duplicate", difficulty: "Easy", completed: false, locked: false },
        { id: 102, name: "Valid Anagram", difficulty: "Easy", completed: false, locked: false },
        { id: 103, name: "Two Sum", difficulty: "Easy", completed: false, locked: false },
        { id: 104, name: "Group Anagrams", difficulty: "Medium", completed: false, locked: false },
        { id: 105, name: "Top K Frequent Elements", difficulty: "Medium", completed: false, locked: false },
        { id: 106, name: "Product of Array Except Self", difficulty: "Medium", completed: false, locked: false },
        { id: 107, name: "Valid Sudoku", difficulty: "Medium", completed: false, locked: false },
        { id: 108, name: "Encode and Decode Strings", difficulty: "Medium", completed: false, locked: true },
        { id: 109, name: "Longest Consecutive Sequence", difficulty: "Medium", completed: false, locked: false }
      ]
    },
    {
      id: 2,
      name: "Two Pointers",
      expanded: false,
      completed: 0,
      total: 5,
      problems: [
        { id: 201, name: "Valid Palindrome", difficulty: "Easy", completed: false, locked: false },
        { id: 202, name: "Two Sum II", difficulty: "Medium", completed: false, locked: false },
        { id: 203, name: "3Sum", difficulty: "Medium", completed: false, locked: false },
        { id: 204, name: "Container With Most Water", difficulty: "Medium", completed: false, locked: false },
        { id: 205, name: "Trapping Rain Water", difficulty: "Hard", completed: false, locked: false }
      ]
    },
    {
      id: 3,
      name: "Sliding Window",
      expanded: false,
      completed: 0,
      total: 6,
      problems: [
        { id: 301, name: "Best Time to Buy & Sell Stock", difficulty: "Easy", completed: false, locked: false },
        { id: 302, name: "Longest Substring Without Repeating Characters", difficulty: "Medium", completed: false, locked: false },
        { id: 303, name: "Longest Repeating Character Replacement", difficulty: "Medium", completed: false, locked: false },
        { id: 304, name: "Permutation in String", difficulty: "Medium", completed: false, locked: true },
        { id: 305, name: "Minimum Window Substring", difficulty: "Hard", completed: false, locked: false },
        { id: 306, name: "Sliding Window Maximum", difficulty: "Hard", completed: false, locked: false }
      ]
    },
    {
      id: 4,
      name: "Stack",
      expanded: false,
      completed: 0,
      total: 7,
      problems: [
        { id: 401, name: "Valid Parentheses", difficulty: "Easy", completed: false, locked: false },
        { id: 402, name: "Min Stack", difficulty: "Medium", completed: false, locked: false },
        { id: 403, name: "Evaluate Reverse Polish Notation", difficulty: "Medium", completed: false, locked: false },
        { id: 404, name: "Generate Parentheses", difficulty: "Medium", completed: false, locked: false },
        { id: 405, name: "Daily Temperatures", difficulty: "Medium", completed: false, locked: false },
        { id: 406, name: "Car Fleet", difficulty: "Medium", completed: false, locked: true },
        { id: 407, name: "Largest Rectangle in Histogram", difficulty: "Hard", completed: false, locked: false }
      ]
    },
    {
      id: 5,
      name: "Binary Search",
      expanded: false,
      completed: 0,
      total: 7,
      problems: [
        { id: 501, name: "Binary Search", difficulty: "Easy", completed: false, locked: false },
        { id: 502, name: "Search a 2D Matrix", difficulty: "Medium", completed: false, locked: false },
        { id: 503, name: "Koko Eating Bananas", difficulty: "Medium", completed: false, locked: false },
        { id: 504, name: "Find Minimum in Rotated Sorted Array", difficulty: "Medium", completed: false, locked: false },
        { id: 505, name: "Search in Rotated Sorted Array", difficulty: "Medium", completed: false, locked: false },
        { id: 506, name: "Time Based Key-Value Store", difficulty: "Medium", completed: false, locked: true },
        { id: 507, name: "Median of Two Sorted Arrays", difficulty: "Hard", completed: false, locked: false }
      ]
    },
    {
      id: 6,
      name: "Linked List",
      expanded: false,
      completed: 0,
      total: 11,
      problems: [
        { id: 601, name: "Reverse Linked List", difficulty: "Easy", completed: false, locked: false },
        { id: 602, name: "Merge Two Sorted Lists", difficulty: "Easy", completed: false, locked: false },
        { id: 603, name: "Reorder List", difficulty: "Medium", completed: false, locked: false },
        { id: 604, name: "Remove Nth Node From End of List", difficulty: "Medium", completed: false, locked: false },
        { id: 605, name: "Copy List with Random Pointer", difficulty: "Medium", completed: false, locked: false },
        { id: 606, name: "Add Two Numbers", difficulty: "Medium", completed: false, locked: false },
        { id: 607, name: "Linked List Cycle", difficulty: "Easy", completed: false, locked: false },
        { id: 608, name: "Find the Duplicate Number", difficulty: "Medium", completed: false, locked: false },
        { id: 609, name: "LRU Cache", difficulty: "Medium", completed: false, locked: true },
        { id: 610, name: "Merge k Sorted Lists", difficulty: "Hard", completed: false, locked: false },
        { id: 611, name: "Reverse Nodes in k-Group", difficulty: "Hard", completed: false, locked: false }
      ]
    },
    {
      id: 7,
      name: "Trees",
      expanded: false,
      completed: 0,
      total: 15,
      problems: [
        { id: 701, name: "Invert Binary Tree", difficulty: "Easy", completed: false, locked: false },
        { id: 702, name: "Maximum Depth of Binary Tree", difficulty: "Easy", completed: false, locked: false },
        { id: 703, name: "Diameter of Binary Tree", difficulty: "Easy", completed: false, locked: false },
        { id: 704, name: "Balanced Binary Tree", difficulty: "Easy", completed: false, locked: false },
        { id: 705, name: "Same Tree", difficulty: "Easy", completed: false, locked: false },
        { id: 706, name: "Subtree of Another Tree", difficulty: "Easy", completed: false, locked: false },
        { id: 707, name: "Lowest Common Ancestor of a BST", difficulty: "Medium", completed: false, locked: false },
        { id: 708, name: "Binary Tree Level Order Traversal", difficulty: "Medium", completed: false, locked: false },
        { id: 709, name: "Binary Tree Right Side View", difficulty: "Medium", completed: false, locked: true },
        { id: 710, name: "Count Good Nodes in Binary Tree", difficulty: "Medium", completed: false, locked: true },
        { id: 711, name: "Validate Binary Search Tree", difficulty: "Medium", completed: false, locked: false },
        { id: 712, name: "Kth Smallest Element in a BST", difficulty: "Medium", completed: false, locked: false },
        { id: 713, name: "Construct Binary Tree from Preorder and Inorder Traversal", difficulty: "Medium", completed: false, locked: false },
        { id: 714, name: "Binary Tree Maximum Path Sum", difficulty: "Hard", completed: false, locked: false },
        { id: 715, name: "Serialize and Deserialize Binary Tree", difficulty: "Hard", completed: false, locked: true }
      ]
    }
  ]);

  useEffect(() => {
    const savedData = localStorage.getItem('DsaRoadmap');
    if (savedData) {
      setCategories(JSON.parse(savedData));
    }
  }, []);

  // Save data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('DsaRoadmap', JSON.stringify(categories));
  }, [categories]);

  // Toggle expand/collapse for a category
  const toggleCategory = (categoryId) => {
    setCategories(categories.map(category => {
      if (category.id === categoryId) {
        return { ...category, expanded: !category.expanded };
      }
      return category;
    }));
  };

  // Toggle completion status of a problem
  const toggleProblemCompletion = (categoryId, problemId) => {
    setCategories(categories.map(category => {
      if (category.id === categoryId) {
        const updatedProblems = category.problems.map(problem => {
          if (problem.id === problemId && !problem.locked) {
            return { ...problem, completed: !problem.completed };
          }
          return problem;
        });
        
        const completedCount = updatedProblems.filter(p => p.completed).length;
        
        return { 
          ...category, 
          problems: updatedProblems,
          completed: completedCount
        };
      }
      return category;
    }));
  };

  // Calculate total completion percentage
  const calculateTotalCompletion = () => {
    const totalProblems = categories.reduce((acc, category) => acc + category.total, 0);
    const completedProblems = categories.reduce((acc, category) => acc + category.completed, 0);
    return totalProblems > 0 ? Math.round((completedProblems / totalProblems) * 100) : 0;
  };

  // Get difficulty color class
  const getDifficultyClass = (difficulty) => {
    switch (difficulty) {
      case 'Easy': return 'difficulty-easy';
      case 'Medium': return 'difficulty-medium';
      case 'Hard': return 'difficulty-hard';
      default: return '';
    }
  };

  return (
    <div className="DSA-roadmap">
      <header className="roadmap-header">
        <h1>DSA Roadmap</h1>
        <div className="progress-container">
          <div className="progress-stats">
            <span>Total Progress</span>
            <span>{calculateTotalCompletion()}%</span>
          </div>
          <div className="progress-bar">
            <div 
              className="progress-fill"
              style={{ width: `${calculateTotalCompletion()}%` }}
            ></div>
          </div>
        </div>
      </header>
      
      <div className="categories-container">
        {categories.map((category) => (
          <div key={category.id} className="category-card">
            <div 
              className="category-header"
              onClick={() => toggleCategory(category.id)}
            >
              <div className="category-info">
                <span className="category-name">{category.name}</span>
                <span className="category-count">
                  {category.completed}/{category.total}
                </span>
              </div>
              <div className="category-progress">
                <div className="category-progress-bar">
                  <div 
                    className="category-progress-fill"
                    style={{ width: `${(category.completed / category.total) * 100}%` }}
                  ></div>
                </div>
                {category.expanded ? 
                  <FaChevronUp className="category-icon" /> : 
                  <FaChevronDown className="category-icon" />
                }
              </div>
            </div>
            
            {category.expanded && (
              <div className="problems-table-container">
                <table className="problems-table">
                  <thead>
                    <tr>
                      <th className="col-num">#</th>
                      <th className="col-problem">Problem</th>
                      <th className="col-difficulty">Difficulty</th>
                      <th className="col-status">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {category.problems.map((problem, idx) => (
                      <tr key={problem.id} className="problem-row">
                        <td className="problem-num">{idx + 1}</td>
                        <td className="problem-name">
                          <span>{problem.name}</span>
                          {problem.locked && <FaLock className="problem-icon lock-icon" />}
                          <FaExternalLinkAlt className="problem-icon link-icon" />
                        </td>
                        <td className={`problem-difficulty ${getDifficultyClass(problem.difficulty)}`}>
                          {problem.difficulty}
                        </td>
                        <td className="problem-status">
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleProblemCompletion(category.id, problem.id);
                            }}
                            className={`status-button ${problem.locked ? 'status-locked' : problem.completed ? 'status-completed' : ''}`}
                            disabled={problem.locked}
                          >
                            {problem.completed && <FaCheck className="check-icon" />}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DsaRoadmap;