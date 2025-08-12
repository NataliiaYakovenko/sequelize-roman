const yup = require("yup");

module.exports.TASK_SCHEMA = yup.object({
    body: yup.string().required('Task text is require').min(1,'Minimum one task'),
    isDone: yup.boolean().required("Is done is require"),
    deadline: yup.date(),
})