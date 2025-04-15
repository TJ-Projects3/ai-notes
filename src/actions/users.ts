"use server"

import { createClient } from "@/auth/server"
import { handleError } from "@/lib/utils"

export const loginAction = async (email: string, password: string) => {
    try {
        const { auth } = await createClient();

        const { error } = await auth.signInWithPassword({
            email,
            password,
        });
        
        if (error) { throw error };
        return { errorMessage: null };
    } catch (error) {
        return handleError(error); // Custom error handling to format errors consistently
        // This code is REUSABLE and will be used multiple time so 
        // a general format for errors would be wise in this case.
    }
}

export const signUpAction = async (email: string, password: string) => {
    try {
        const { auth } = await createClient(); // Allows us to access Supabase Auth functions

        const { data, error } = await auth.signUp({ 
            email,
            password,
        }); // Creates a new user with Supabase Auth
        if (error) { throw error }
        const userId = data.user?.id;
        if (!userId) { throw new Error("Error signing up")}; // Checks userId to verify in the table that this is an actual user now
        // Covers edge cases through doing so
        
        // Add user to database (doing later)

        return { errorMessage: null };


    } catch (error) {
        return handleError(error);
    }
}

export const logOutAction = async () => {
    try {
        const { auth } = await createClient();

        const { error } = await auth.signOut()

        if (error) { throw error };
        return { errorMessage: null };
    } catch (error) {
        return handleError(error);
    }
}