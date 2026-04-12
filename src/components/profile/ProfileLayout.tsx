import React from "react";
import { Card, Avatar, Separator, Chip } from "@heroui/react";
import Image from "next/image";
import {
  MdOutlineEmail,
  MdOutlineVerifiedUser,
  MdOutlineCalendarToday,
} from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import EditProfileBtn from "./EditProfileBtn";
import { IUser } from "@/types/app";
const ProfileLayout = ({
  user,
  joinedDate,
  userLocation,
}: {
  user: IUser | undefined | null;
  joinedDate: string;
  userLocation?: {
    city: string;
    country: string;
  };
}) => {
  return (
    <section className="min-h-screen bg-slate-50/50 pb-12">
      {/* 1. Header Area - Fixed Height for consistency */}
      <div className="h-72 w-full relative bg-slate-900 overflow-hidden rounded-lg">
        <Image
          src="https://t4.ftcdn.net/jpg/00/97/87/09/360_F_97870953_V0Aq7dhJp2reT1GsGXy0vI2fdazTC9IX.jpg"
          alt="cover"
          priority
          className=" object-cover opacity-50 shadow-inner rounded-full"
          fill
        />
        <div className="absolute inset-0 bg-linear-to-t from-slate-950/20 to-transparent" />
      </div>

      {/* 2. Content Wrapper */}
      <div className="max-w-5xl mx-auto px-6 mt-3 relative z-20 ">
        <div className="flex flex-col gap-8">
          {/* Profile Header Card */}
          <Card
            variant="secondary"
            className="p-8 border-none bg-white/80 shadow-xl shadow-sky-600/50 overflow-visible"
          >
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-end">
              <div className="relative -mt-20 md:-mt-24 border-2  rounded-full">
                <Avatar size="lg">
                  <Avatar.Image
                    className="object-cover "
                    alt="user avatar"
                    src=""
                  />
                  <Avatar.Fallback className="capitalize font-bold ">
                    {user?.user_metadata?.name?.slice(0, 2) || "P"}
                  </Avatar.Fallback>
                </Avatar>
              </div>

              <div className="flex-1 text-center md:text-left space-y-1">
                <Card.Title className="text-3xl capitalize font-bold text-slate-900 tracking-tight">
                  {user?.user_metadata?.name || "User Name"}
                </Card.Title>
                <div className="flex flex-col ml-3 items-start justify-start md:justify-start">
                  <Card.Description className="text-slate-500 font-semibold  ">
                    {user?.aud || "user verification status"} user
                  </Card.Description>
                  <Card.Description className="flex justify-center items-center gap-2">
                    <FaLocationDot />
                    {`${userLocation?.city} ${userLocation?.country}` ||
                      "Location"}
                  </Card.Description>
                </div>
              </div>

              <EditProfileBtn user={user} />
            </div>
          </Card>

          {/* 3. Details Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column (8 units) */}
            <div className="lg:col-span-8 space-y-8">
              <Card className="p-8 border-none shadow-sm">
                <div className="flex items-center justify-between mb-8">
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-slate-800">
                      General Information
                    </h3>
                    <p className="text-sm text-slate-400">
                      Basic details about your account
                    </p>
                  </div>
                  <Chip
                    variant="primary"
                    color="success"
                    size="sm"
                    className="font-bold"
                  >
                    Personal Account
                  </Chip>
                </div>

                <div className="grid gap-8">
                  {/* Row 1: Name */}
                  <div className="flex items-start gap-5">
                    <div className="p-3 bg-slate-50 rounded-2xl text-slate-500">
                      <MdOutlineVerifiedUser size={24} />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-widest">
                        Full Name
                      </label>
                      <p className="text-slate-700 capitalize font-bold text-lg">
                        {user?.user_metadata?.name || "User Name"}
                      </p>
                    </div>
                  </div>

                  <Separator className="bg-slate-100" />

                  {/* Row 2: Email */}
                  <div className="flex items-start gap-5">
                    <div className="p-3 bg-slate-50 rounded-2xl text-slate-500">
                      <MdOutlineEmail size={24} />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-widest">
                        Email Address
                      </label>
                      <p className="text-slate-700 font-bold text-lg">
                        {user?.email || "Email Address"}
                      </p>
                    </div>
                  </div>

                  <Separator className="bg-slate-100" />

                  {/* Row 3: Date */}
                  <div className="flex items-start gap-5">
                    <div className="p-3 bg-slate-50 rounded-2xl text-slate-500">
                      <MdOutlineCalendarToday size={24} />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-widest">
                        Member Since
                      </label>
                      <p className="text-slate-700 font-bold text-lg">
                        {joinedDate || "Joined Date"}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Right Column (4 units) */}
            <div className="lg:col-span-4 space-y-8">
              {/* Status Card */}
              <Card className="p-8 border-none bg-slate-900 text-white shadow-xl shadow-slate-200">
                <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6">
                  Security Status
                </h4>
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative">
                    <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.6)]" />
                    <div className="absolute inset-0 w-3 h-3 rounded-full bg-green-500 animate-ping opacity-75" />
                  </div>
                  <span className="text-lg font-bold">Authenticated</span>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Your email is verified and your session is secure.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileLayout;
