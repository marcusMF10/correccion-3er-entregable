import { useState } from 'react';
import PropTypes from 'prop-types';

// material-ui
import {
  Typography,
  Stack,
  Grid,
  TextField,
  MenuItem,
  Button,
  Select,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  Radio
} from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import MultipleSelectChip from './MultipleSelectChip';

// react-router-dom
import { Link, useNavigate } from 'react-router-dom';

const TeacherFrom = ({ teacher, isEdit }) => {
  const [name, setName] = useState(teacher?.name || '');
  const [lastName, setLastName] = useState(teacher?.lastName || '');
  const [email, setEmail] = useState(teacher?.email || '');
  const [phone, setPhone] = useState(teacher?.phone || '');
  const [address, setAddress] = useState(teacher?.address || '');
  const [age, setAge] = useState(teacher?.age || '');
  const [gender, setGender] = useState(teacher?.gender || '');
  const [typeDocument, setTypeDocument] = useState(teacher.typeDocument || '');
  const [numberDocument, setNumberDocument] = useState(teacher?.numberDocument || '');
  const [dateBirth, setDateBirth] = useState(teacher?.dateBirth || '');
  const [typeSubject, setTypeSubject] = useState(teacher?.typeSubject || []);
  const [codigoTeacher, setCodigoTeacher] = useState(teacher.codigoTeacher || '');

  const navigate = useNavigate();

  const handleSubmit = async () => {
    // send data
    const body = {
      name,
      lastName,
      email,
      phone,
      address,
      age,
      gender,
      typeDocument,
      numberDocument,
      dateBirth,
      typeSubject,
      codigoTeacher
    };

    const URL = isEdit && teacher._id ? `http://localhost:9000/api/teachers/${teacher._id}` : 'http://localhost:9000/api/teachers';

    try {
      const response = await fetch(URL, {
        method: isEdit ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });

      const result = await response.json();
      console.log('Success:', result);

      // Redireccionar al usuario a la ruta "/students"
      navigate('/teachers');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Stack spacing={3} px={20}>
      <MainCard>
        <Grid container spacing={3}>
          <Grid item xs={6} sm={4} md={6} lg={4}>
            <Typography variant="h5" fontWeight="bold">
              Basic details
            </Typography>
          </Grid>
          <Grid item xs={6} sm={4} md={6} lg={8}>
            <Stack spacing={2}>
              <TextField label="Name" variant="outlined" defaultValue={teacher.name} onChange={(e) => setName(e.target.value)} />
              <TextField
                label="Last Name"
                variant="outlined"
                defaultValue={teacher.lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <TextField label="Email" variant="outlined" defaultValue={teacher.email} onChange={(e) => setEmail(e.target.value)} />
              <TextField label="Phone" variant="outlined" defaultValue={teacher.phone} onChange={(e) => setPhone(e.target.value)} />
              <TextField label="Address" variant="outlined" defaultValue={teacher.address} onChange={(e) => setAddress(e.target.value)} />
              <TextField label="Age" variant="outlined" defaultValue={teacher.age} onChange={(e) => setAge(e.target.value)} />
              <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
              <RadioGroup defaultValue={teacher.gender} row onChange={(e) => setGender(e.target.value)}>
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
              </RadioGroup>
            </Stack>
          </Grid>
        </Grid>
      </MainCard>

      <MainCard>
        <Grid container spacing={3}>
          <Grid item xs={6} sm={4} md={6} lg={4}>
            <Typography variant="h5" fontWeight="bold">
              Identity
            </Typography>
          </Grid>
          <Grid item xs={6} sm={4} md={6} lg={8}>
            <Stack spacing={2}>
              <FormLabel id="demo-simple-select-label">Type Document</FormLabel>
              <Select defaultValue={teacher.typeDocument} label="Type Document" onChange={(e) => setTypeDocument(e.target.value)}>
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="passport">Passport</MenuItem>
                <MenuItem value="identification_card">Identification Card</MenuItem>
              </Select>
              <TextField
                label="Number document"
                variant="outlined"
                defaultValue={teacher.numberDocument}
                onChange={(e) => setNumberDocument(e.target.value)}
              />
              <FormLabel id="demo-simple-select-label">Date of birth</FormLabel>
              <TextField
                type="date"
                variant="outlined"
                placeholder="YY/MM/AAA"
                defaultValue={teacher.dateBirth}
                onChange={(e) => setDateBirth(e.target.value)}
              />
            </Stack>
          </Grid>
        </Grid>
      </MainCard>

      <MainCard>
        <Grid container spacing={3}>
          <Grid item xs={6} sm={4} md={6} lg={4}>
            <Typography variant="h5" fontWeight="bold">
              Subjects
            </Typography>
          </Grid>
          <Grid item xs={6} sm={4} md={6} lg={8}>
            <Stack spacing={2}>
              <FormLabel id="demo-simple-select-label">Type Subject</FormLabel>
              <MultipleSelectChip defaultValue={teacher.typeSubject} onChange={(selectedOptions) => setTypeSubject(selectedOptions)} />
            </Stack>
          </Grid>
        </Grid>
      </MainCard>

      <MainCard>
        <Grid container spacing={3}>
          <Grid item xs={6} sm={4} md={6} lg={4}>
            <Typography variant="h5" fontWeight="bold">
              Teacher
            </Typography>
          </Grid>
          <Grid item xs={6} sm={4} md={6} lg={8}>
            <Stack spacing={2}>
              <TextField
                id="outlined-basic"
                label="Code of teacher"
                variant="outlined"
                defaultValue={teacher.codigoTeacher}
                onChange={(e) => setCodigoTeacher(e.target.value)}
              />
            </Stack>
          </Grid>
        </Grid>
      </MainCard>

      <Stack>
        <Grid container spacing={2} direction="row-reverse">
          <Grid item>
            <Button size="small" variant="contained" onClick={handleSubmit}>
              {isEdit ? 'Edit' : 'Create'}
            </Button>
          </Grid>

          <Grid item>
            <Button size="small" variant="outlined" component={Link} to="/teachers">
              Cancel
            </Button>
          </Grid>
        </Grid>
      </Stack>
    </Stack>
  );
};

TeacherFrom.propTypes = {
  teacher: PropTypes.object,
  isEdit: PropTypes.bool
};

const Teacher = {
  name: '',
  lastName: '',
  email: '',
  phone: '',
  address: '',
  age: 0,
  gender: '',
  typeDocument: '',
  typeSubject: '',
  numberDocument: '',
  dateBirth: '',
  codigoTeacher: ''
};

TeacherFrom.defaultProps = {
  teacher: Teacher,
  isEdit: false
};

export default TeacherFrom;
