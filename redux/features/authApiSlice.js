import { apiSlice } from '../services/apiSlice';


const authApiSlice = apiSlice.injectEndpoints({
	endpoints: builder => ({
		retrieveUser: builder.query({
			query: () => '/api/users/me/',
		}),
		retrieveProfile: builder.query({
			query: () => '/api/jwt/profile',
		}),
		updateProfile: builder.mutation({
			query: (data) => ({
				url: `/api/jwt/profile/${data.id}/`,
				method: 'PUT',
				body: data.formData,
				
			}),
		}),
		socialAuthenticate: builder.mutation({
			query: ({ provider, state, code }) => ({
				url: `/o/${provider}/?state=${encodeURIComponent(
					state
				)}&code=${encodeURIComponent(code)}`,
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/x-www-form-urlencoded',
				},
			}),
		}),
		login: builder.mutation({
			query: ({ email, password }) => ({
				url: '/api/jwt/create/',
				method: 'POST',
				body: { email, password },
			}),
		}),
		register: builder.mutation({
			query: ({
				first_name,
				last_name,
				email,
				date_of_birth,
				phone_number,
				password,
				re_password,
			}) => ({
				url: '/api/users/',
				method: 'POST',
				body: { first_name, last_name,phone_number, email,date_of_birth, password, re_password },
			}),
		}),
		verify: builder.mutation({
			query: () => ({
				url: '/api/jwt/verify/',
				method: 'POST',
			}),
		}),
		logout: builder.mutation({
			query: () => ({
				url: '/api/jwt/logout/',
				method: 'POST',
			}),
		}),
		activation: builder.mutation({
			query: ({ uid, token }) => ({
				url: '/api/users/activation/',
				method: 'POST',
				body: { uid, token },
			}),
		}),
		resetPassword: builder.mutation({
			query: email => ({
				url: '/api/users/reset_password/',
				method: 'POST',
				body: { email },
			}),
		}),
		resetPasswordConfirm: builder.mutation({
			query: ({ uid, token, new_password, re_new_password }) => ({
				url: '/api/users/reset_password_confirm/',
				method: 'POST',
				body: { uid, token, new_password, re_new_password },
			}),
		}),
		retrieveHomeView: builder.query({
			query: () => '/medication/home/',
		}),
		retrieveAllMedics: builder.query({
			query: () => '/medication/all/',
		}),
		retrieveMedication: builder.query({
			query: () => '/medication/medics',
		}),
		editMedication: builder.mutation({
			query: (data) => ({
				url: `/medication/medics/${data.medId}`,
				method: 'PUT',
				body: {data},
			}),
		}),
		medication: builder.mutation({
			query: (data) => ({
				url: '/medication/medics/',
				method: 'POST',
				body: JSON.stringify(data),    // Explicitly stringify the object
				headers: {
				  'Content-Type': 'application/json', // Specify the content type as JSON
				},
			}),
		}),
		deleteMedication: builder.mutation({
			query: (data) => ({
				url: `/medication/medics/${data.id}`,
				method: 'Delete',
			}),
		}),
		retrieveDoctor: builder.query({
			query: () => '/medication/appoint',
		}),
		editDoctor: builder.mutation({
			query: (data) => ({
				url: `/medication/appoint/${data.medId}`,
				method: 'PUT',
				body: {data},
			}),
		}),
		doctor: builder.mutation({
			query: ({inputValue}) => ({
				url: '/medication/appoint/',
				method: 'POST',
				body:inputValue
			}),
		}),
		deleteDoctor: builder.mutation({
			query: (data) => ({
				url: `/medication/appoint/${data.id}/`,
				method: 'DELETE',
			}),
		}),
		retrieveRefill: builder.query({
			query: () => '/medication/reminder',
		}),
		editRefill: builder.mutation({
			query: (data) => ({
				url: `/medication/reminder/${data.medId}`,
				method: 'PUT',
				body: {data},
			}),
		}),
		refill: builder.mutation({
			query: (data) => ({
				url: '/medication/reminder/',
				method: 'POST',
				body: JSON.stringify(data), // Explicitly stringify the object
				headers: {
				  'Content-Type': 'application/json', // Specify the content type as JSON
				},
			}),
		}),
		deleteRefill: builder.mutation({
			query: (data) => ({
				url: `/medication/reminder/${data.id}/`,
				method: 'DELETE',
			}),
		}),
		retrieveRecord: builder.query({
			query: () => '/medication/records',
		}),
		editRecord: builder.mutation({
			query: (data) => ({
				url: `/medication/records/${data.medId}`,
				method: 'PUT',
				body: {data},
			}),
		}),
		record: builder.mutation({
			query: (data) => ({
				url: '/medication/records/',
				method: 'POST',
				body: data, // Explicitly stringify the object
				// headers: {
				//   'Content-Type': 'application/json', // Specify the content type as JSON
				// },
			}),
		}),
		deleteRecord: builder.mutation({
			query: (data) => ({
				url: `/medication/records/${data.id}/`,
				method: 'DELETE',
			}),
		}),
	}),
});

export const {
	useRetrieveUserQuery,
	useRetrieveProfileQuery,
	useUpdateProfileMutation,
	
	useSocialAuthenticateMutation,
	useLoginMutation,
	useRegisterMutation,
	useVerifyMutation,
	useLogoutMutation,
	useActivationMutation,
	useResetPasswordMutation,
	useResetPasswordConfirmMutation,
	useRetrieveHomeViewQuery,
	useRetrieveAllMedicsQuery,
	useRetrieveMedicationQuery,
	useEditMedicationMutation,
	useMedicationMutation,
	useDeleteMedicationMutation,

	useRetrieveDoctorQuery,
	useEditDoctorMutation,
	useDoctorMutation,
	useDeleteDoctorMutation,

	useRetrieveRefillQuery,
	useEditRefillMutation,
	useRefillMutation,
	useDeleteRefillMutation,

	useRetrieveRecordQuery,
	useEditRecordMutation,
	useRecordMutation,
	useDeleteRecordMutation,

	util: { getRunningQueriesThunk },
} = authApiSlice;

export const { retrieveRecord, retrieveRefill } = authApiSlice.endpoints;