import BusinessArea from "./BussinesArea.js";
import Project from "./Project.js";
import Task from "./Task.js";
import Team from "./Team.js";

BusinessArea.hasMany(Project, {
  foreignKey: "businessAreaId",
  onDelete: "CASCADE",
});

Project.hasMany(Task, {
  foreignKey: "projectId",
  onDelete: "CASCADE",
});

Task.belongsTo(Project, {
  foreignKey: "projectId",
  onDelete: "CASCADE",
});

Project.hasMany(Team, {
  foreignKey: "projectId",
  onDelete: "CASCADE",
});

Team.belongsTo(Project, {
  foreignKey: "projectId",
  onDelete: "CASCADE",
});

export { BusinessArea, Project, Task, Team };
