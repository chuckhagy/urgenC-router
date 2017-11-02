import deleteAssignment from "../../api/deleteAssignment";


export default function deleteAssignmentProcess(assignmentId) {
    return (dispatch, getState) => {
        return deleteAssignment(assignmentId, getState().userToken)
            .then(response => {
                console.log('response right before dispatch', response)
                dispatch({
                    type: "DELETE_ASSIGNMENT",
                    deletedAssignment: {
                        id: response.id,
                        goalId: response.goalId,
                    }
                });
                return response;
            });
    };
}
