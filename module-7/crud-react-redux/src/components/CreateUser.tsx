import { Badge, Button, Card, TextInput, Title } from '@tremor/react';
import { useUserAction } from '../hooks/useUsersActons';
import { useState } from 'react';

const CreateUser = () => {
  const { addUser } = useUserAction();
  const [result, setResult] = useState<'ok' | 'ko' | null>(null);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setResult(null);
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    const name = formData.get('name');
    const email = formData.get('email');
    const userGitHub = formData.get('userGitHub');

    if (!name || !email || !userGitHub) {
      setResult('ko');
      return;
    }

    addUser({ name, email, github: userGitHub });
    setResult('ok');
    form.reset();
  };
  return (
    <Card style={{ marginTop: '16px' }}>
      <Title>Create new user</Title>
      <form onSubmit={handleSubmit}>
        <TextInput name="name" placeholder="Name"></TextInput>
        <TextInput name="email" placeholder="Email"></TextInput>
        <TextInput name="userGitHub" placeholder="User GitHub"></TextInput>

        <div>
          <Button type="submit" style={{ marginTop: '16px' }}>
            Create Button
          </Button>
          <span>
            {result === 'ok' && <Badge color="green">Save correcly</Badge>}
            {result === 'ko' && <Badge color="red">Error in the fields</Badge>}
          </span>
        </div>
      </form>
    </Card>
  );
};

export default CreateUser;
