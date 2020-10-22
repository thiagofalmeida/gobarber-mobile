import React from 'react';
import { View, Button } from 'react-native';

import { useAuth } from '../../hooks/auth';

const CreateAppointment: React.FC = () => {
  const { user } = useAuth();

  return <View />;
};

export default CreateAppointment;
