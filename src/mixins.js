import StorageServices from '@/storage';
const storage = new StorageServices;

import EventBus from '@/eventBus';

export const AccountMixins = {
    methods:{
        async openAccount(){
            const token = await storage.get('token');
            const users = await storage.get('users');
            if(token){
              if(users.isAdmin) this.$router.push('/admin').catch(()=>{});
              await this.$router.push('/user').catch(()=>{});
            }
            else{
              await EventBus.$emit('OPEN_SIGNIN_MODAL', true);
            }
        },
        async logoutAccount(){
            await storage.remove('token');
            await storage.remove('users');
            await this.$router.push('/');
        }

    }
}