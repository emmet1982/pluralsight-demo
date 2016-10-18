import * as types from './actionTypes';
import CourseApi from '../api/mockCourseApi';

export function createCourse(course){
  return { type: types.CREATE_COURSE, course};
}

export function loadCourses(){
  return function(dispatch){
    return CourseApi.getAllCourses();
  };
}
