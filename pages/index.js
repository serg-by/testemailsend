import { TextInput, Textarea, Button, Container, Group, Box } from "@mantine/core";
import { useForm } from "@mantine/form";
import { showNotification } from "@mantine/notifications";
import Link from 'next/link'


const styles = {
  menu: `flex items-center gap-6`,
  menuItem: `flex items-center text-md font-bold cursor-pointer`,
};

export default function Home() {

  const submitForm = useForm({
    initialValues: {
      email: '',
      name: '',
      message: ''
    },

    validate: {
      email: value => (/^\S+@\S+$/.test(value) ? null : 'Invalid email address')
    }
  });

  const handleSubmit = async values => {
    const request = await fetch('/api/submit', {
      method: 'POST',
      body: JSON.stringify(values)
    });

    const result = await request.json();

    if (result.data !== 'ok') {
      showNotification({
        title: "Error submit",
        color: "red",
        message: "Sorry, you are not allowed to submit"
      })
      return;
    }
    showNotification({
      title: "Succes submit",
      color: "green",
      message: "Sorry, you are not allowed to submit"
    })
    submitForm.setValues({
      email: '',
      name: '',
      message: ''
    })
  }

  return (
    <>

      <Container size={200} px={0} mt="xl">

        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>

        <Box mx="auto">
          <form onSubmit={submitForm.onSubmit(values => handleSubmit(values))}>
            <TextInput required label="Email" placeholder="exemple@exemple.com" {...submitForm.getInputProps('email')} />
            <TextInput required label="Name" placeholder="First Name" {...submitForm.getInputProps('name')} />
            <Textarea required label="Message" placeholder="Your Message" {...submitForm.getInputProps('message')} />
            <Group position="right" mt="md">
              <Button type="submit">Submit</Button>
            </Group>
          </form>
        </Box>
      </Container>
    </>
  );
}
