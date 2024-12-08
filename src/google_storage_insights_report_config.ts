import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleStorageInsightsReportConfigArgsCsvOptions {
  delimiter?: string;
  header_required?: boolean;
  record_separator?: string;
}

export interface GoogleStorageInsightsReportConfigArgsFrequencyOptionsEndDate {
  day: number;
  month: number;
  year: number;
}

export interface GoogleStorageInsightsReportConfigArgsFrequencyOptionsStartDate {
  day: number;
  month: number;
  year: number;
}

export interface GoogleStorageInsightsReportConfigArgsFrequencyOptions {
  frequency: string;
  end_date: GoogleStorageInsightsReportConfigArgsFrequencyOptionsEndDate;
  start_date: GoogleStorageInsightsReportConfigArgsFrequencyOptionsStartDate;
}

export interface GoogleStorageInsightsReportConfigArgsObjectMetadataReportOptionsStorageDestinationOptions {
  bucket: string;
  destination_path?: string;
}

export interface GoogleStorageInsightsReportConfigArgsObjectMetadataReportOptionsStorageFilters {
  bucket?: string;
}

export interface GoogleStorageInsightsReportConfigArgsObjectMetadataReportOptions {
  metadata_fields: string[];
  storage_destination_options: GoogleStorageInsightsReportConfigArgsObjectMetadataReportOptionsStorageDestinationOptions;
  storage_filters?: GoogleStorageInsightsReportConfigArgsObjectMetadataReportOptionsStorageFilters;
}

export interface GoogleStorageInsightsReportConfigArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleStorageInsightsReportConfigArgs {
  display_name?: string;
  location: string;
  csv_options: GoogleStorageInsightsReportConfigArgsCsvOptions;
  frequency_options?: GoogleStorageInsightsReportConfigArgsFrequencyOptions;
  object_metadata_report_options?: GoogleStorageInsightsReportConfigArgsObjectMetadataReportOptions;
  timeouts?: GoogleStorageInsightsReportConfigArgsTimeouts;
}

export class google_storage_insights_report_config extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleStorageInsightsReportConfigArgs) {
    const meta = {csv_options:{isBlock:true},frequency_options:{isBlock:true,end_date:{isBlock:true},start_date:{isBlock:true}},object_metadata_report_options:{isBlock:true,storage_destination_options:{isBlock:true},storage_filters:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_storage_insights_report_config", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get location(): string {
    return `${this.resourceType}.${this.resourceName}.location`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }
}
