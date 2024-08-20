import React, { useState } from "react";
import axios from "axios";
import { Shell } from "@/components/ui/shell";
import { ErrorCard } from "@/components/cards/error-card";

const ProfilePage = () => {


  return (
    <Shell className="max-w-6xl">
      <ErrorCard 
        title="Page not found"
        description="The page you are looking for does not exist"
        retryLink="/"
      />

    </Shell>
  );
};

export default ProfilePage;
