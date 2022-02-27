import express from "express";

const router = express.Router()

/*
type : GET REQUEST
path : /api/v1/auth/users
query - params : none
isProtected : true (admin can access this )
*/

// router.get('/users', isAdmin, async (req, res) => {
router.get('/users', async (req, res) => {
    try {

    } catch (error) {
        console.log(error.message)
        res.status(500).json({ message: "Error fetching users" })
    }
})

export default router