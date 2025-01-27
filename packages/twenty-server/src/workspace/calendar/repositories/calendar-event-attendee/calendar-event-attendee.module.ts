import { Module } from '@nestjs/common';

import { CalendarEventAttendeeService } from 'src/workspace/calendar/repositories/calendar-event-attendee/calendar-event-attendee.service';
import { WorkspaceDataSourceModule } from 'src/workspace/workspace-datasource/workspace-datasource.module';

@Module({
  imports: [WorkspaceDataSourceModule],
  providers: [CalendarEventAttendeeService],
  exports: [CalendarEventAttendeeService],
})
export class CalendarEventAttendeeModule {}
