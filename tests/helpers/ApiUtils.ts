import supertest = require("supertest")

class Apiutils {
    private url = "https://api.todoist.com/rest/v2/"
    private key = process.env.key
    public async createProject (){ 
        let request = supertest (this.url)
        const response = await request
        .post('projects')
        .set('Authorization' , 'Bearer ' + this.key)
        .send({'name' : "Mobile project", "color": "red"})

    return response.body
    }

    public async createTask () {
        let project = await this.createProject()
        let request = supertest (this.url)
        const response = await request
        .post('tasks')
        .set('Authorization' , 'Bearer ' + this.key)
        .send({'content' : "Mobile task", "project_id": project.id})
        return response.body
    }

    public async reopenTask (id: string) {
        let request = supertest (this.url)
        const response = await request
        .post(`tasks/${id}/reopen`)
        .set('Authorization' , 'Bearer ' + this.key)
        .send()
    }
    
   
}

export const api = new Apiutils()
