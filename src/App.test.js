import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  beforeEach(() => {
    render(<App />);
  });

// Checks for each section of About Us

//Intro & History
  test('renders Introduction & History component with correct title', () => {
    expect(screen.getByText(/Introduction & History/i)).toBeInTheDocument();
  });


//Our Team
  test('renders OurTeam component with correct names', () => {
    expect(screen.getByText(/Mike Lee/i)).toBeInTheDocument();
    expect(screen.getByText(/Sarah Smith/i)).toBeInTheDocument();
    expect(screen.getByText(/Benson Karunayake/i)).toBeInTheDocument();
  });

// Photos & Videos
test('renders photos in the carousel', () => {
  const carouselImages = screen.getAllByRole('img');
  expect(carouselImages.length).toEqual(3);
});


//Tests for each section of Schedule

//Timetables
test('renders Class timetables component with number of tables & titlez', () => {
  const tableBody = screen.getAllByRole('tbody')
  expect(tableBody.length).toEqual(2);

  expect(screen.getByText(/Boxing Fitness Classes/i)).toBeInTheDocument();
  expect(screen.getByText(/Boxing Technique Classes/i)).toBeInTheDocument();
});

//Professional Fights

test('renders Professional Fights component with correct title + presence of a presentation div', () => {
  expect(screen.getByText(/Professional Fights/i)).toBeInTheDocument();
  expect(screen.getByRole('presentation')).toBeInTheDocument();
});


//Tests for each section of Join Us

//Sign up
test('renders sign up component with correct  label names, and correct number of input fields', () => {
  const inputs = screen.getAllByRole('textbox')
  expect(inputs.length).toEqual(3);

  expect(screen.getByLabelText(/First name/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Last name/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
});

//Send us a message
test('renders sign up component with correct  label names, and correct number of input fields', () => {
  const message = screen.getAllByRole('form')
  expect(message.length).toEqual(1);

  expect(screen.getByText(/Send Us a Message/i)).toBeInTheDocument();

});



//Tests for the copyright statement

  test('renders Footer component with copyright text', () => {
   
    expect(screen.getByText(/2025 @ Lunchbox PTY LTD/i)).toBeInTheDocument();
  });

  
//Tests for interactive elements: Links & BUttons

  test('renders links in navigation', () => {
    const navLinks = screen.getAllByRole('link');
    expect(navLinks.length).toBeGreaterThan(0);
  });



  test('renders buttons in interactive sections', () => {
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBeGreaterThan(0);
  });
});